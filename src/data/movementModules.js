export const hipModule = {
  eyebrow: 'Movement Manual · Module 1',
  title: 'Hip Explorer',
  subtitle: 'A visual way to learn why your hips feel tight, how they rotate, and how they connect to your knees, low back, glutes, and everyday movement.',
  model: {
    title: 'Pelvis and Femurs 3D Model',
    embedUrl: 'https://sketchfab.com/models/2fe10ddca8bc40c1a23a60fdba4486c1/embed?autostart=0&ui_theme=dark&ui_infos=0&ui_stop=0&ui_watermark=0',
    sourceUrl: 'https://sketchfab.com/3d-models/pelvis-and-femurs-2fe10ddca8bc40c1a23a60fdba4486c1',
    attributionText: '3D model: “Pelvis and Femurs” by CaitlynnH on Sketchfab. License shown on Sketchfab as Creative Commons Attribution.',
    note: 'This first model shows the pelvis and femurs clearly. Next step is adding muscle models for glutes, hip flexors, adductors, and deep rotators.'
  },
  focusAreas: [
    {
      id: 'pelvis',
      label: 'Pelvis',
      plain: 'Your pelvis is the base that connects your spine to your legs.',
      why: 'When the pelvis tilts or rotates poorly, your low back, hips, and knees often compensate.',
      lookFor: 'In the 3D model, rotate until you can see the bowl shape of the pelvis and the hip sockets on each side.'
    },
    {
      id: 'hip-socket',
      label: 'Hip socket',
      plain: 'The hip is a ball-and-socket joint. The top of the femur rotates inside the socket.',
      why: 'This is why the hip can move in many directions: flexion, extension, rotation, abduction, and adduction.',
      lookFor: 'Zoom into where the thigh bone meets the pelvis. That is the main movement center.'
    },
    {
      id: 'femur',
      label: 'Femur',
      plain: 'The femur is your thigh bone. It is the long bone that connects the hip to the knee.',
      why: 'When your femur rotates inward or outward, it affects how your knee tracks during squats, lunges, running, and hiking.',
      lookFor: 'Follow the thigh bone down from the hip socket and imagine the knee at the bottom.'
    },
    {
      id: 'glutes',
      label: 'Glutes',
      plain: 'Your glutes extend, rotate, and stabilize your hip.',
      why: 'If the glutes are not doing their job, the low back, hip flexors, TFL, or knees can take extra load.',
      lookFor: 'This bone model does not show glute tissue yet. Think of the glutes as wrapping around the back and outside of the pelvis.'
    },
    {
      id: 'hip-flexors',
      label: 'Hip flexors',
      plain: 'Hip flexors help bring your knee toward your chest.',
      why: 'Sitting puts these muscles in a shortened position for a long time, which is one reason the front of the hips can feel tight.',
      lookFor: 'Think of these muscles as running from the front of your pelvis/spine area toward the top of the thigh.'
    }
  ],
  movements: [
    {
      name: 'Flexion',
      plain: 'Knee comes toward your chest.',
      everyday: 'Sitting, walking uphill, stepping up, running stride recovery.',
      mainPlayers: 'Hip flexors, rectus femoris, core support.',
      cue: 'Picture your thigh folding toward your torso.'
    },
    {
      name: 'Extension',
      plain: 'Thigh moves behind you.',
      everyday: 'Walking, hiking uphill, running push-off, standing tall from a lunge.',
      mainPlayers: 'Glutes and hamstrings.',
      cue: 'Picture pushing the ground behind you.'
    },
    {
      name: 'Internal rotation',
      plain: 'Thigh rotates inward.',
      everyday: 'Squatting, cutting, turning, controlling knee position.',
      mainPlayers: 'Glute med/min fibers, adductors, TFL depending on position.',
      cue: 'Picture the thigh bone spinning inward in the socket.'
    },
    {
      name: 'External rotation',
      plain: 'Thigh rotates outward.',
      everyday: 'Deep squat, athletic stance, opening the hip, changing direction.',
      mainPlayers: 'Deep rotators, glute max, piriformis region.',
      cue: 'Picture the thigh bone spinning outward in the socket.'
    },
    {
      name: 'Abduction',
      plain: 'Leg moves away from the midline.',
      everyday: 'Side steps, single-leg balance, keeping pelvis level.',
      mainPlayers: 'Glute medius, glute minimus, TFL.',
      cue: 'Picture stepping sideways without letting the pelvis drop.'
    },
    {
      name: 'Adduction',
      plain: 'Leg moves toward the midline.',
      everyday: 'Cutting, skating-style movement, pulling the legs together.',
      mainPlayers: 'Adductor group on inner thigh.',
      cue: 'Picture the inner thigh pulling the leg back under you.'
    }
  ],
  scenarios: [
    {
      title: 'My hips feel tight from sitting',
      body: 'The front of the hip is held in a shortened position while the glutes are often underused. The fix is usually not just stretching. You also want to remind the glutes how to help.',
      quickMap: ['Hip flexors feel short', 'Glutes may feel sleepy', 'Low back may overarch or compensate'],
      starter: 'Try hip flexor mobility paired with glute bridges, split squats, or step-ups.'
    },
    {
      title: 'My knees cave in when I squat',
      body: 'The knee often follows what the hip and foot allow. If the thigh bone rotates inward without control, the knee may drift inward too.',
      quickMap: ['Hip rotation control matters', 'Glute medius helps stabilize the pelvis', 'Ankle and foot mobility also matter'],
      starter: 'Try slow bodyweight squats, lateral band walks, and controlled single-leg work.'
    },
    {
      title: 'My low back gets cranky hiking',
      body: 'If the hip does not extend well, your low back may try to create the motion instead. Uphill hiking exposes this fast.',
      quickMap: ['Limited hip extension', 'Glutes not powering each step', 'Spine taking extra work'],
      starter: 'Try glute strength, hip extension mobility, and shorter stride control on climbs.'
    }
  ],
  quiz: [
    {
      question: 'Which movement brings your knee toward your chest?',
      answers: ['Hip flexion', 'Hip extension', 'Hip abduction'],
      correct: 0,
      explanation: 'Flexion folds the hip. Think knee toward chest.'
    },
    {
      question: 'Which area helps keep the pelvis stable during single-leg balance?',
      answers: ['Forearms', 'Glute medius', 'Jaw muscles'],
      correct: 1,
      explanation: 'The glute medius is a major side-hip stabilizer.'
    },
    {
      question: 'If your thigh bone spins outward in the socket, that is:',
      answers: ['Internal rotation', 'External rotation', 'Adduction'],
      correct: 1,
      explanation: 'External rotation means the thigh rotates outward.'
    }
  ]
};
