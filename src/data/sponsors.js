import * as images from '@assets/sponsors';

const SIZES = {
  OMEGA: 500,
  LARGE: 400,
  MEDIUM: 300,
  SMALL: 200,
  TINY: 100,
};

export const sponsors = [
  {
    title: 'Intact Insurance',
    url: 'https://insurance.intact.ca/',
    image: images.intact,
    size: SIZES.OMEGA,
  },
  {
    title: 'Amazon Web Services',
    url: 'https://aws.amazon.com/',
    image: images.aws_cropped,
    size: SIZES.LARGE,
  },
  {
    title: 'Microsoft',
    url: 'https://microsoft.com/',
    image: images.microsoft,
    size: SIZES.LARGE,
    subtext: 'Microsoft Privacy Statement',
    sublink: 'https://privacy.microsoft.com/en-us/privacystatement',
  },
  {
    title: "Ontario Teachers' Pension Plan",
    url: 'https://www.otpp.com/',
    image: images.otpp,
    size: SIZES.MEDIUM,
  },
  {
    title: 'Deloitte',
    url: 'https://www.deloitte.com/',
    image: images.deloitte,
    size: SIZES.MEDIUM,
  },
  {
    title: 'Capital One',
    url: 'https://www.capitalone.ca/',
    image: images.capitalone,
    size: SIZES.SMALL,
  },
  {
    title: 'Rotman Master of Management Analytics',
    url: 'http://www.rotman.utoronto.ca/Degrees/MastersPrograms/MMA',
    image: images.rotman,
    size: SIZES.SMALL,
  },
  {
    title: 'Vena Solutions',
    url: 'https://venasolutions.com/',
    image: images.vena,
    size: SIZES.SMALL,
  },
  {
    title: 'Code Mode',
    url: 'https://www.codemode.co/',
    image: images.codemode,
    size: SIZES.TINY,
  },
  {
    title: 'CloudSploit',
    url: 'https://cloudsploit.com/',
    image: images.cloudsploit,
    size: SIZES.TINY,
  },
  {
    title: 'Voiceflow',
    url: 'https://www.voiceflow.com/',
    image: images.voiceflow,
    size: SIZES.TINY,
  },
  {
    title: 'Indico',
    url: 'https://indico.io/',
    image: images.indico,
    size: SIZES.TINY,
  },
  {
    title: 'BrainStation',
    url: 'https://brainstation.io/',
    image: images.brainstation,
    size: SIZES.TINY,
  },
  {
    title: 'Sketch',
    url: 'https://www.sketch.com/',
    image: images.sketch,
    size: SIZES.TINY,
  },
  {
    title: 'Balsamiq',
    url: 'https://balsamiq.com/',
    image: images.balsamiq,
    size: SIZES.TINY,
  },
  {
    title: 'Generation.XYZ',
    url: 'https://gen.xyz',
    image: images.xyz,
    size: SIZES.TINY,
  },
];
