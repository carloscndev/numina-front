export const validateEmail = email => {
  return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
}

export const validateNickname = nickname => {
  return nickname.match(/^\S{3,}$/)
}
