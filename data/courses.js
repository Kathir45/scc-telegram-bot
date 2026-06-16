
const courses = {
  cbse: {
    class9: {
      science: {
        title: 'CBSE Class 9 Science',
        description: 'Comprehensive Science course covering Physics, Chemistry, and Biology',
        url: 'https://www.smartclassconnect.com/courses/Science-Class-9-CBSE-6a0ef13f5c1c518b7f543620',
        price: 'Starting from  AED 179'
      },
      mathematics: {
        title: 'CBSE Class 9 Mathematics',
        description: 'Master all mathematical concepts with live classes and practice problems',
        url: 'https://www.smartclassconnect.com/courses/Mathematics-Class-12-CBSE-6a0ed95ba15a591f41247514',
        price: 'Starting from  AED 179'
      }
    },
    class10: {
      science: {
        title: 'CBSE Class 10 Science',
        description: 'Board exam preparation with focus on previous year questions',
        url: 'https://www.smartclassconnect.com/courses/-Science-Class-10-CBSE-6a0ef251bc0890bce60651c5',
        price: 'Starting from  AED 269'
      },
      mathematics: {
        title: 'CBSE Class 10 Mathematics',
        description: 'Complete mathematics curriculum with board exam focus',
        url: 'https://www.smartclassconnect.com/courses/Mathematics-Class-10-CBSE-6a0daba41f392a4f52786af1',
        price: 'Starting from  AED 269'
      }
    },
    class11: {
      science: {
        title: 'CBSE Class 11 Science',
        description: 'Advanced science covering physics, chemistry, and biology',
        url: 'https://www.smartclassconnect.com/courses/cience-Class-11-CBSE-6a0ef9772a2295064d6d4b83',
        price: 'Starting from  AED 299'
      },
      mathematics: {
        title: 'CBSE Class 11 Mathematics',
        description: 'Higher mathematics including calculus and trigonometry',
        url: 'https://www.smartclassconnect.com/courses/Mathematics-Class-11-CBSE-6a0db31ce78954308db2ab27',
        price: 'Starting from  AED 299'
      }
    },
    class12: {
      science: {
        title: 'CBSE Class 12 Science',
        description: 'Final year science for competitive exams and boards',
        url: 'https://www.smartclassconnect.com/courses/Science-Class-12-CBSE-6a0f029a5c33c877d32e94df',
        price: 'Starting from  AED 349'
      },
      mathematics: {
        title: 'CBSE Class 12 Mathematics',
        description: 'Complete mathematics including matrices and calculus',
        url: 'https://www.smartclassconnect.com/courses/Mathematics-Class-12-CBSE-6a0ed95ba15a591f41247514',
        price: 'Starting from  AED 349'
      }
    }
  },
  icse: {
    class9: {
      science: {
        title: 'ICSE Class 9 Science',
        description: 'ICSE-specific science curriculum with lab practicals',
        url: 'https://www.smartclassconnect.com/courses/Science-Class-9-ICSE-6a0f060c0a2d2210ff2fb01c',
        price: 'Starting from  AED 215'
      },
      mathematics: {
        title: 'ICSE Class 9 Mathematics',
        description: 'ICSE mathematics with problem-solving focus',
        url: 'https://www.smartclassconnect.com/courses/Mathematics-Class-9-ICSE-6a0ee7c2525afc2ef59ca45e',
        price: 'Starting from  AED 215'
      }
    },
    class10: {
      science: {
        title: 'ICSE Class 10 Science',
        description: 'ICSE board exam preparation with practical focus',
        url: 'https://www.smartclassconnect.com/courses/Science-Class-10-ICSE-6a0f0936ecd6a7957bf39555',
        price: 'Starting from  AED 289'
      },
      mathematics: {
        title: 'ICSE Class 10 Mathematics',
        description: 'ICSE mathematics with board exam questions',
        url: 'https://www.smartclassconnect.com/courses/Mathematics-Class-10-ICSE-6a0f9cca2c94f1047258006c',
        price: 'Starting from  AED 289'
      }
    },
    class11: {
      science: {
        title: 'ICSE Class 11 Science',
        description: 'Advanced science following ICSE curriculum',
        url: 'https://www.smartclassconnect.com/courses/Science-Class-11-ICSE-6a0f0aa52a2295064d6d530b',
        price: 'Starting from  AED 319'
      },
      mathematics: {
        title: 'ICSE Class 11 Mathematics',
        description: 'Higher mathematics per ICSE board',
        url: 'https://www.smartclassconnect.com/courses/Mathematics-Class-11-ICSE-6a0f9d84b905766c709d9c08',
        price: 'Starting from  AED 319'
      }
    },
    class12: {
      science: {
        title: 'ICSE Class 12 Science',
        description: 'Final year science for ICSE board',
        url: 'https://www.smartclassconnect.com/courses/Science-Class-12-ICSE-6a0f0faf591f2aa1abbfb86a',
        price: 'Starting from  AED 379'
      },
      mathematics: {
        title: 'ICSE Class 12 Mathematics',
        description: 'Final mathematics for ICSE board',
        url: 'https://www.smartclassconnect.com/courses/Mathematics-Class-12-ICSE-6a0f9e95981794a4f14933fa',
        price: 'Starting from  AED 379'
      }
    }
  },
  igcse: {
    grade9: {
      science: {
        title: 'IGCSE Grade 9 Science (Extended)',
        description: 'International curriculum with global standards',
        url: 'https://www.smartclassconnect.com/courses/Science-Class-9-IGCSE-6a0fa1b7d7fa21ce2fa9ac40',
        price: 'Starting from  AED 359'
      },
      mathematics: {
        title: 'IGCSE Grade 9 Mathematics (Extended)',
        description: 'IGCSE mathematics curriculum for Grade 9',
        url: 'https://www.smartclassconnect.com/courses/-Mathematics-Class-9-IGCSE-6a0eeb2797767472d828ca79',
        price: 'Starting from  AED 359'
      }
    },
    grade10: {
      science: {
        title: 'IGCSE Grade 10 Science (Extended)',
        description: 'Comprehensive international science curriculum',
        url: 'https://www.smartclassconnect.com/courses/Science-Class-10-IGCSE-6a0fa2f2d7fa21ce2fa9acb9',
        price: 'Starting from  AED 399'
      },
      mathematics: {
        title: 'IGCSE Grade 10 Mathematics (Extended)',
        description: 'Extended mathematics for international exams',
        url: 'https://www.smartclassconnect.com/courses/Mathematics-Class-10-IGCSE-6a0f9f3f53930352295af746',
        price: 'Starting from  AED 399'
      }
    },
    grade11: {
      science: {
        title: 'IGCSE Grade 11 Science (Extended)',
        description: 'Comprehensive international science curriculum',
        url: 'https://www.smartclassconnect.com/courses/Science-Class-11-IGCSE-6a0fa380981794a4f14935c7',
        price: 'Starting from  AED 399'
      },
      mathematics: {
        title: 'IGCSE Grade 10 Mathematics (Extended)',
        description: 'Extended mathematics for international exams',
        url: 'https://www.smartclassconnect.com/courses/Mathematics-Class-11-IGCSE-6a0fa05a53930352295af7a9',
        price: 'Starting from  AED 399'
      }
    },
    grade12: {
      science: {
        title: 'IGCSE Grade 12 Science (Extended)',
        description: 'Comprehensive international science curriculum',
        url: 'https://www.smartclassconnect.com/courses/Science-Class-12-IGCSE-6a0fa419af896d30d20c75dd',
        price: 'Starting from  AED 399'
      },
      mathematics: {
        title: 'IGCSE Grade 10 Mathematics (Extended)',
        description: 'Extended mathematics for international exams',
        url: 'https://www.smartclassconnect.com/courses/Mathematics-Class-12-IGCSE-6a0fa0e4d7fa21ce2fa9abb2',
        price: 'Starting from  AED 399'
      }
    }
  }
};

module.exports = courses;
