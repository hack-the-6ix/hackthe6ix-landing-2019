import * as images from '@assets/sponsors';

const SIZES = {
	OMEGA: 500,
    LARGE: 400,
    MEDIUM: 300,
    SMALL: 200
};

export const sponsors = [
	{
		title: 'Intact Insurance',
		url: 'https://insurance.intact.ca/',
		image: images.intact,
		size: SIZES.OMEGA
	},
    {
        title: 'Amazon Web Services',
        url: 'https://aws.amazon.com/',
        image: images.aws,
        size: SIZES.LARGE
    },
	{
        title: 'Microsoft',
        url: 'https://microsoft.com/',
        image: images.microsoft,
        size: SIZES.LARGE
    },
	{
        title: "Ontario Teachers' Pension Plan",
        url: 'https://www.otpp.com/',
        image: images.otpp,
        size: SIZES.MEDIUM
    },
	{
        title: "Deloitte",
        url: 'https://www.deloitte.com/',
        image: images.deloitte,
        size: SIZES.MEDIUM
    },
    {
        title: 'Capital One',
        url: 'https://www.capitalone.ca/',
        image: images.capitalone,
        size: SIZES.SMALL
    },
	{
        title: 'Rotman Commerce',
        url: 'https://rotmancommerce.utoronto.ca/',
        image: images.rotman,
        size: SIZES.SMALL
    }
];