import successIcon from '../Assets/Img/pass-icon.png';
import incompleIcon from '../Assets/Img/incomplete-icon.png';
import cvreviewIcon from '../Assets/Img/cvreview.png';
import mailIcon from '../Assets/Img/mail.png';
import callIcon from '../Assets/Img/call-white-outline.png';
import announcIcon from '../Assets/Img/announcement.png';

const ProcessData = [
  {
    id: 1,
    icon1: mailIcon,
    title: 'Applied',
    date: 'Tue, 27 Sept',
    icon2: successIcon,
  },
  {
    id: 2,
    icon1: cvreviewIcon,
    title: 'CV Review',
    date: 'Fri, 30 Aug',
    icon2: successIcon,
  },
  {
    id: 3,
    icon1: callIcon,
    title: 'Interview With User',
    date: 'Tue,4 Oct',
    icon2: incompleIcon,
  },
  {
    id: 4,
    icon1: announcIcon,
    title: 'Announcement',
    date: 'Sun, 9 Oct',
    icon2: incompleIcon,
  },
];

export default ProcessData;
