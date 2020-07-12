import {email, old_devpost, social_media} from './variables';

export const faq = [
  {
    title: 'General',
    items: [
      {
        title: 'Do you really "hack" at a hackathon?',
        content: 'No, we are not doing or encouraging illegal activities here.',
      },
      {
        title:
          'What kind of workshops, talks, and activities will there be at Hack the 6ix?',
        content:
          'We’ll be hosting a variety of workshops ranging from introductory to advanced topics facilitated by our amazing sponsors and mentors. There will also be interesting tech talks by industry leaders from different companies that you may attend to get a break from your project grind. In addition to useful workshops and talks, we have a ton of fun activities planned for you, such as games, contests, and more! Hack the 6ix is much more than just a hackathon – we want it to be an event that you’ll thoroughly enjoy while expanding your skillset and network.',
      },
      {
        title: 'So what is a hackathon then?',
        content:
          'A hackathon is a live event where “hackers” (participants) design, develop, and pitch a software or hardware project built from scratch over the course of 36 hours. We will provide you with the resources and mentorship needed in order to make this happen!',
      },
      {
        title: 'Can I work on my hack before the event?',
        content:
          'No. To maintain competition integrity and fairness, all work on your hack must be done <bold>at the event</bold>. All projects with prior work done will be eliminated from judging. However, you are encouraged to touch up on your skills or bring any hardware in preparation for the event!',
      },
    ],
  },
  {
    title: 'Preparation',
    items: [
      {
        title: 'How much does it cost to attend?',
        content:
          'Absolutely nothing! Hack the 6ix is a completely free event run by a non-profit organization. All resources and support for hacking for the entire event will be provided free of charge.',
      },
      {
        title: 'How do I get to Hack the 6ix?',
        content:
          'This year, we are entirely digital! All events will be held and accessed on online communication platforms, so you can hack from the comfort of your home, no matter where you are!',
      },
      {
        title: 'What should I bring?',
        content:
          'Make sure you have a device you can develop your project on, access to internet, and video/audio capabilities for chatting with your teammates, mentors, and sponsors!',
      },
    ],
  },
  {
    title: 'Application',
    items: [
      {
        title: 'Am I eligible to participate?',
        content:
          'Any secondary or post-secondary students or recent graduates are eligible to participate in our event.',
      },
      {
        title: 'Do I need to know how to code?',
        content:
          'Nope! Our mentors and workshops make sure that even if you’re new to coding, you’ll definitely pick up enough skills at the event to make a project. In addition, if you’re a designer or business student, your design and pitching skills are also very valuable!',
      },
      {
        title: 'Can I sign up with a team?',
        content:
          'We allow team sign-ups of up to 4 people. All team members must sign up individually and specify the other team members on their application.',
      },
      {
        title: 'What if I don’t have a team or idea?',
        content:
          'Don’t worry, you may form or join a team by messaging the participant groups/chats that we’ll put you in during the weeks leading up to the weekend, as well as through team formation activities during the event. For ideas, check out our submissions from last year for some inspiration: <a href="' +
          old_devpost +
          '">' +
          old_devpost +
          '</a>',
      },
      {
        title: 'I still have questions!',
        content:
          'If you have any other questions, feel free to send us a message at <a href="' +
          email +
          '">' +
          email +
          '</a> or shoot us a message on <a href="' +
          social_media[0].link +
          '">Facebook</a>!',
      },
    ],
  },
];
