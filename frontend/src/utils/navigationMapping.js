import { ProjectOutlined, UserOutlined, FileOutlined } from '@ant-design/icons-vue'

export const linkMapping = {
  attendee: [{ name: 'Events', path: '/', icon: ProjectOutlined }],
  admin: [{ name: 'Members', path: '/', icon: UserOutlined }],
  organizer: [{ name: 'Events', path: '/', icon: ProjectOutlined }],
  reviewer: [{ name: 'Papers', path: '/', icon: FileOutlined }],
  author: [
    { name: 'Events', path: '/', icon: ProjectOutlined },
    { name: 'My Papers', path: '/papers', icon: FileOutlined }
  ]
}
