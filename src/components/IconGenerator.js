import {
  CodeSlashOutline,
  CreateOutline,
  CloseCircleOutline,
  Newspaper,
  PieChart
} from 'react-ionicons';

const iconsMapping = {
  code: CodeSlashOutline,
  edit: CreateOutline,
  delete: CloseCircleOutline,
  paper: Newspaper,
  pie: PieChart
};

const IconGenerator = props => {
  const {
    type,
    className,
    color = '#fff',
    fontSize = '30px',
    backgroundColor: background,
    ...config
  } = props;

  const style = {
    background,
    padding: '5px'
  };

  const extraConfig = {
    color,
    style,
    width: fontSize,
    height: fontSize,
    cssClasses: className,
    ...config
  };

  const Icon = iconsMapping[type];

  return Icon ? <Icon {...extraConfig} /> : null;
};

export default IconGenerator;
