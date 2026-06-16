#!/bin/bash
# Supabase Setup Verification Script
# Run this to verify everything is ready

echo "🔍 Supabase Migration Verification"
echo "===================================="
echo ""

# Check files exist
echo "✓ Checking files..."
files=(
  "supabase_schema.sql"
  "utils/supabaseClient.js"
  "handlers/leadCollectionHandler.js"
  "SUPABASE_SETUP.md"
  "SUPABASE_MIGRATION.md"
  "SUPABASE_README.txt"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "  ✅ $file"
  else
    echo "  ❌ $file (MISSING)"
  fi
done

echo ""
echo "✓ Checking dependencies in package.json..."
if grep -q "@supabase/supabase-js" package.json; then
  echo "  ✅ Supabase dependency added"
else
  echo "  ❌ Supabase dependency NOT found"
fi

echo ""
echo "✓ Checking .env variables..."
if grep -q "SUPABASE_URL" .env; then
  echo "  ✅ SUPABASE_URL in .env"
else
  echo "  ❌ SUPABASE_URL NOT in .env"
fi

if grep -q "SUPABASE_KEY" .env; then
  echo "  ✅ SUPABASE_KEY in .env"
else
  echo "  ❌ SUPABASE_KEY NOT in .env"
fi

echo ""
echo "✓ SQL Schema statistics..."
schema_lines=$(wc -l < supabase_schema.sql)
table_count=$(grep -c "CREATE TABLE" supabase_schema.sql)
echo "  📊 $schema_lines lines of SQL"
echo "  📊 $table_count tables defined"
index_count=$(grep -c "CREATE INDEX" supabase_schema.sql)
echo "  📊 $index_count indexes created"

echo ""
echo "✓ File sizes..."
echo "  📄 supabase_schema.sql: $(du -h supabase_schema.sql | cut -f1)"
echo "  📄 SUPABASE_SETUP.md: $(du -h SUPABASE_SETUP.md | cut -f1)"
echo "  📄 SUPABASE_MIGRATION.md: $(du -h SUPABASE_MIGRATION.md | cut -f1)"

echo ""
echo "===================================="
echo "✅ Verification Complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Run 'npm install' to install Supabase"
echo "2. Update .env with Supabase credentials"
echo "3. Run supabase_schema.sql in Supabase SQL Editor"
echo "4. Run 'npm start' to test"
echo ""
echo "📚 Read SUPABASE_README.txt for quick start"
echo "===================================="
