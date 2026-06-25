export interface StickerData {
  id: string
  text: string
  category: string
  color: string
  emoji: string
  tagColor: string
}

export const stickerList: StickerData[] = [
  // 生日系列 - 淡鹅黄 #FFF3CD
  { id: 'birthday-1', text: '生日快乐', category: '生日', color: '#FFF3CD', emoji: '🎂', tagColor: '#FFD166' },
  { id: 'birthday-2', text: '周岁纪念', category: '生日', color: '#FFF8E1', emoji: '👶', tagColor: '#FFB347' },
  { id: 'birthday-3', text: '生日贺卡', category: '生日', color: '#FFF3CD', emoji: '💌', tagColor: '#FFD166' },
  { id: 'birthday-4', text: '寿星专属', category: '生日', color: '#FFF8E1', emoji: '🌟', tagColor: '#FFB347' },
  { id: 'birthday-5', text: '生日祝福', category: '生日', color: '#FFF3CD', emoji: '🎉', tagColor: '#FFD166' },
  { id: 'birthday-6', text: '生日搞怪', category: '生日', color: '#FFF8E1', emoji: '🤪', tagColor: '#FFB347' },
  { id: 'birthday-7', text: '生日配图', category: '生日', color: '#FFF3CD', emoji: '📸', tagColor: '#FFD166' },
  { id: 'birthday-8', text: '礼物文案', category: '生日', color: '#FFF8E1', emoji: '🎁', tagColor: '#FFB347' },
  { id: 'birthday-9', text: '寿星头像', category: '生日', color: '#FFF3CD', emoji: '👑', tagColor: '#FFD166' },

  // 祝福系列 - 浅粉 #FFE4E1
  { id: 'bless-1', text: '新婚祝福', category: '祝福', color: '#FFE4E1', emoji: '💒', tagColor: '#FF9AA2' },
  { id: 'bless-2', text: '升学祝福', category: '祝福', color: '#FFD1DC', emoji: '🎓', tagColor: '#FF9AA2' },
  { id: 'bless-3', text: '乔迁贺词', category: '祝福', color: '#FFE4E1', emoji: '🏠', tagColor: '#FF9AA2' },
  { id: 'bless-4', text: '升职加薪', category: '祝福', color: '#FFD1DC', emoji: '💰', tagColor: '#FF9AA2' },
  { id: 'bless-5', text: '平安喜乐', category: '祝福', color: '#FFE4E1', emoji: '🕊️', tagColor: '#FF9AA2' },
  { id: 'bless-6', text: '岁岁安康', category: '祝福', color: '#FFD1DC', emoji: '🍀', tagColor: '#FF9AA2' },
  { id: 'bless-7', text: '万事顺意', category: '祝福', color: '#FFE4E1', emoji: '✨', tagColor: '#FF9AA2' },
  { id: 'bless-8', text: '开工大吉', category: '祝福', color: '#FFD1DC', emoji: '🧧', tagColor: '#FF9AA2' },
  { id: 'bless-9', text: '节日祝福', category: '祝福', color: '#FFE4E1', emoji: '🎊', tagColor: '#FF9AA2' },
  { id: 'bless-10', text: '长辈问候', category: '祝福', color: '#FFD1DC', emoji: '👴', tagColor: '#FF9AA2' },
  { id: 'bless-11', text: '暖心寄语', category: '祝福', color: '#FFE4E1', emoji: '💕', tagColor: '#FF9AA2' },
  { id: 'bless-12', text: '毕业祝福', category: '祝福', color: '#FFD1DC', emoji: '🎓', tagColor: '#FF9AA2' },

  // 搞怪趣味系列 - 薄荷绿 #D4F1C5
  { id: 'fun-1', text: '沙雕文案', category: '搞怪', color: '#D4F1C5', emoji: '🤣', tagColor: '#7EC8A0' },
  { id: 'fun-2', text: '表情包配文', category: '搞怪', color: '#C8E6C9', emoji: '😜', tagColor: '#7EC8A0' },
  { id: 'fun-3', text: '摆烂语录', category: '搞怪', color: '#D4F1C5', emoji: '🛌', tagColor: '#7EC8A0' },
  { id: 'fun-4', text: '发疯文学', category: '搞怪', color: '#C8E6C9', emoji: '🤯', tagColor: '#7EC8A0' },
  { id: 'fun-5', text: '趣味整活', category: '搞怪', color: '#D4F1C5', emoji: '🎭', tagColor: '#7EC8A0' },
  { id: 'fun-6', text: '自嘲段子', category: '搞怪', color: '#C8E6C9', emoji: '😅', tagColor: '#7EC8A0' },
  { id: 'fun-7', text: '损友专属', category: '搞怪', color: '#D4F1C5', emoji: '👯', tagColor: '#7EC8A0' },
  { id: 'fun-8', text: '脑洞短句', category: '搞怪', color: '#C8E6C9', emoji: '💡', tagColor: '#7EC8A0' },
  { id: 'fun-9', text: '搞笑朋友圈', category: '搞怪', color: '#D4F1C5', emoji: '😂', tagColor: '#7EC8A0' },

  // 节日系列 - 天青蓝 #D4E6F1
  { id: 'fest-1', text: '春节文案', category: '节日', color: '#D4E6F1', emoji: '🧨', tagColor: '#85C1E9' },
  { id: 'fest-2', text: '中秋祝福', category: '节日', color: '#BBDEFB', emoji: '🌕', tagColor: '#85C1E9' },
  { id: 'fest-3', text: '端午安康', category: '节日', color: '#D4E6F1', emoji: '🐲', tagColor: '#85C1E9' },
  { id: 'fest-4', text: '七夕文案', category: '节日', color: '#BBDEFB', emoji: '🌌', tagColor: '#85C1E9' },
  { id: 'fest-5', text: '圣诞快乐', category: '节日', color: '#D4E6F1', emoji: '🎄', tagColor: '#85C1E9' },
  { id: 'fest-6', text: '元旦文案', category: '节日', color: '#BBDEFB', emoji: '🎆', tagColor: '#85C1E9' },
  { id: 'fest-7', text: '五一文案', category: '节日', color: '#D4E6F1', emoji: '🛠️', tagColor: '#85C1E9' },
  { id: 'fest-8', text: '六一文案', category: '节日', color: '#BBDEFB', emoji: '🧸', tagColor: '#85C1E9' },
  { id: 'fest-9', text: '元宵文案', category: '节日', color: '#D4E6F1', emoji: '🏮', tagColor: '#85C1E9' },

  // 情感文案系列 - 浅紫 #E8DAEF
  { id: 'emo-1', text: '温柔治愈', category: '情感', color: '#E8DAEF', emoji: '🌸', tagColor: '#BB8FCE' },
  { id: 'emo-2', text: '伤感短句', category: '情感', color: '#D7BDE2', emoji: '🌧️', tagColor: '#BB8FCE' },
  { id: 'emo-3', text: '告白情话', category: '情感', color: '#E8DAEF', emoji: '💗', tagColor: '#BB8FCE' },
  { id: 'emo-4', text: '暗恋文案', category: '情感', color: '#D7BDE2', emoji: '👀', tagColor: '#BB8FCE' },
  { id: 'emo-5', text: '闺蜜文案', category: '情感', color: '#E8DAEF', emoji: '👭', tagColor: '#BB8FCE' },
  { id: 'emo-6', text: '兄弟文案', category: '情感', color: '#D7BDE2', emoji: '👬', tagColor: '#BB8FCE' },
  { id: 'emo-7', text: '亲子语录', category: '情感', color: '#E8DAEF', emoji: '👨‍👩‍👧', tagColor: '#BB8FCE' },

  // 实用素材系列 - 橘奶油色 #FFE5CC
  { id: 'util-1', text: '短视频配文', category: '素材', color: '#FFE5CC', emoji: '🎬', tagColor: '#F0A07C' },
  { id: 'util-2', text: '朋友圈文案', category: '素材', color: '#FFDAB9', emoji: '📱', tagColor: '#F0A07C' },
  { id: 'util-3', text: '海报短句', category: '素材', color: '#FFE5CC', emoji: '🖼️', tagColor: '#F0A07C' },
  { id: 'util-4', text: '短视频标题', category: '素材', color: '#FFDAB9', emoji: '📹', tagColor: '#F0A07C' },
  { id: 'util-5', text: '签名文案', category: '素材', color: '#FFE5CC', emoji: '✍️', tagColor: '#F0A07C' },
  { id: 'util-6', text: '走心短句', category: '素材', color: '#FFDAB9', emoji: '💫', tagColor: '#F0A07C' },

   { id: 'beautiful-1', text: '好看的', category: '好看的', color: '#FFDAB9', emoji: '✅', tagColor: '#F0A07C' },
]
