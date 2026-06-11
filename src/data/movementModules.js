export const hipModule = {
  title: 'Hip Explorer',
  eyebrow: 'Movement Manual · Module 1',
  intro: 'Learn how your hips move, why they can feel tight, and how the hip connects to your knees, spine, glutes, and everyday movement.',
  model: {
    title: '3D Hip Model',
    // Replace this with a licensed Sketchfab/BioDigital/other embed URL.
    // Sketchfab example format: https://sketchfab.com/models/MODEL_ID/embed
    embedUrl: '',
    attribution: 'Add model attribution here when you choose the final free/Creative Commons model.'
  },
  hotspots: [
    {
      label: 'Pelvis',
      x: 51,
      y: 32,
      text: 'The pelvis is the base of the trunk. It connects your spine to your legs and gives the hip muscles a place to attach.'
    },
    {
      label: 'Hip flexors',
      x: 43,
      y: 45,
      text: 'Hip flexors help bring your thigh toward your chest. Sitting a lot can make this area feel stiff or overworked.'
    },
    {
      label: 'Glutes',
      x: 60,
      y: 52,
      text: 'The glutes extend, rotate, and stabilize the hip. Weak or sleepy glutes can make other areas compensate.'
    },
    {
      label: 'Femur',
      x: 52,
      y: 68,
      text: 'The femur is your thigh bone. Its ball-shaped head rotates inside the hip socket.'
    }
  ],
  movements: [
    {
      name: 'Flexion',
      plain: 'Knee moves toward your chest.',
      example: 'Walking uphill, sitting, bringing your knee up.',
      muscles: 'Hip flexors, rectus femoris, core support.'
    },
    {
      name: 'Extension',
      plain: 'Thigh moves behind you.',
      example: 'Pushing off while walking, running, hiking.',
      muscles: 'Glutes and hamstrings.'
    },
    {
      name: 'Internal Rotation',
      plain: 'Thigh rotates inward.',
      example: 'Squatting, changing direction, keeping knees tracking well.',
      muscles: 'Glute med/min fibers, adductors, TFL depending on position.'
    },
    {
      name: 'External Rotation',
      plain: 'Thigh rotates outward.',
      example: 'Opening your hip, deep squat position, athletic stance.',
      muscles: 'Deep rotators, glute max, piriformis region.'
    },
    {
      name: 'Abduction',
      plain: 'Leg moves away from midline.',
      example: 'Side steps, single-leg balance, stabilizing pelvis.',
      muscles: 'Glute medius, glute minimus, TFL.'
    },
    {
      name: 'Adduction',
      plain: 'Leg moves toward midline.',
      example: 'Pulling legs together, cutting, skating-style movement.',
      muscles: 'Adductor group on inner thigh.'
    }
  ],
  scenarios: [
    {
      title: 'My hips feel tight from sitting',
      highlights: ['Hip flexors may feel shortened', 'Glutes may not be contributing well', 'Low back may compensate'],
      try: 'Pair hip flexor mobility with glute bridges or split-squat strength work.'
    },
    {
      title: 'My knees cave in when I squat',
      highlights: ['Hip rotation control matters', 'Glute medius helps control the thigh', 'Feet and ankles also play a role'],
      try: 'Practice slow bodyweight squats, lateral band walks, and controlled single-leg work.'
    },
    {
      title: 'My low back gets cranky hiking',
      highlights: ['Hips and spine share load', 'Limited hip extension can shift stress to the low back', 'Glutes help power uphill movement'],
      try: 'Work on hip extension, glute strength, and thoracic/spine movement.'
    }
  ],
  quiz: [
    {
      question: 'Which movement brings your knee toward your chest?',
      answers: ['Hip flexion', 'Hip extension', 'Hip abduction'],
      correct: 0
    },
    {
      question: 'Which muscle group is a major hip stabilizer during single-leg balance?',
      answers: ['Forearms', 'Glute medius', 'Neck flexors'],
      correct: 1
    },
    {
      question: 'When your thigh rotates outward, that is called:',
      answers: ['Internal rotation', 'External rotation', 'Adduction'],
      correct: 1
    }
  ]
};
