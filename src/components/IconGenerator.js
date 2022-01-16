import { CodeSlashOutline, CreateOutline, CloseCircleOutline } from 'react-ionicons'

const defaultConfig = {
  color: '#fff',
  cssClasses: 'rounded-circle',
  height: '30px',
  width: '30px'
}

const iconsMapping = {
  code: CodeSlashOutline,
  edit: CreateOutline,
  delete: CloseCircleOutline
}

const IconGenerator = props => {
  const { type, ...config } = props

  const Icon = iconsMapping[type]

  return Icon ? <Icon {...defaultConfig} {...config} /> : null
}

export default IconGenerator
