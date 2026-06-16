-- Smart Class Connect Supabase Schema
-- Run this SQL file in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- LEADS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS leads (
  id BIGINT PRIMARY KEY,
  user_id BIGINT NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  notes TEXT
);

-- ============================================
-- USERS TABLE (for bot user tracking)
-- ============================================
CREATE TABLE IF NOT EXISTS users (
  user_id BIGINT PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  username VARCHAR(255) UNIQUE,
  phone_code VARCHAR(5),
  language VARCHAR(10) DEFAULT 'en',
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_interaction TIMESTAMP
);

-- ============================================
-- DEMO BOOKINGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS demo_bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id BIGINT NOT NULL,
  student_name VARCHAR(255),
  student_class VARCHAR(10),
  student_board VARCHAR(50),
  subject VARCHAR(100),
  preferred_time TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  notes TEXT,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- ============================================
-- BOT ACTIVITY LOG TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS activity_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id BIGINT NOT NULL,
  action VARCHAR(100),
  details JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- COURSES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_code VARCHAR(50) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  class VARCHAR(10),
  board VARCHAR(50),
  subject VARCHAR(100),
  duration VARCHAR(50),
  price_aed DECIMAL(10, 2),
  difficulty_level VARCHAR(50),
  instructor_name VARCHAR(255),
  instructor_email VARCHAR(255),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- USER COURSE ENROLLMENTS
-- ============================================
CREATE TABLE IF NOT EXISTS enrollments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id BIGINT NOT NULL,
  course_id UUID NOT NULL,
  enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  completion_date TIMESTAMP,
  progress_percentage INT DEFAULT 0,
  status VARCHAR(50) DEFAULT 'active',
  last_accessed TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- ============================================
-- COUNSELOR SESSIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS counselor_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id BIGINT NOT NULL,
  counselor_name VARCHAR(255),
  counselor_phone VARCHAR(20),
  session_type VARCHAR(50),
  notes TEXT,
  scheduled_at TIMESTAMP,
  completed_at TIMESTAMP,
  status VARCHAR(50) DEFAULT 'scheduled',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- ============================================
-- FAQ RECORDS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS faqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category VARCHAR(100),
  question VARCHAR(500),
  answer TEXT,
  display_order INT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- ANALYTICS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS analytics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  metric_name VARCHAR(100),
  metric_value INT,
  metric_date DATE DEFAULT CURRENT_DATE,
  details JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- CREATE INDEXES FOR PERFORMANCE
-- ============================================
CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads(phone);
CREATE INDEX IF NOT EXISTS idx_users_created ON users(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_demo_bookings_created ON demo_bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_activity_logs_created ON activity_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enrollments_user_course ON enrollments(user_id, course_id);

-- ============================================
-- FUNCTIONS FOR AUTOMATIC UPDATED_AT
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for automatic updated_at
CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_demo_bookings_updated_at BEFORE UPDATE ON demo_bookings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON courses
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_faqs_updated_at BEFORE UPDATE ON faqs
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- INSERT SAMPLE DATA (Optional)
-- ============================================

-- Insert sample FAQs
INSERT INTO faqs (category, question, answer, display_order) VALUES
  ('Fees', 'What is the course fee?', 'Our fees vary based on class level and duration. Monthly: د.إ 179, Quarterly: د.إ 499, Annual: د.إ 1,799', 1),
  ('Certificate', 'Will I receive a certificate?', 'Yes! All students who complete their course receive a completion certificate, merit certificate for top performers, course report card, and digital badge.', 2),
  ('Classes', 'Are classes live?', 'Yes! We conduct live interactive classes with scheduled timings. All classes are recorded for later viewing.', 3),
  ('Recordings', 'Can I watch recordings later?', 'Absolutely! All class recordings are available with lifetime access for unlimited views.', 4)
ON CONFLICT DO NOTHING;

-- ============================================
-- ROW LEVEL SECURITY (Optional - Uncomment to enable)
-- ============================================
-- ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE users ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE demo_bookings ENABLE ROW LEVEL SECURITY;

-- Create policies (if RLS is enabled)
-- CREATE POLICY "Users can view their own leads"
--   ON leads FOR SELECT
--   USING (user_id = current_user_id());

-- ============================================
-- MIGRATION NOTE
-- ============================================
-- To migrate existing data from leads.json:
-- 1. Export leads.json data
-- 2. Use INSERT INTO leads (...) VALUES (...) 
-- 3. Or use Supabase dashboard to import CSV
