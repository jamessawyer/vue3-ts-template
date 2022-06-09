export const validatePassword = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (rule: any, value: string, callback: (...args: any[]) => void) => {
    if (!value.trim()) {
      callback(new Error('请输入密码'))
    } else if (value.trim().length < 6) {
      callback(new Error('密码长度不能小于6位'))
    } else if (value.trim().length > 16) {
      callback(new Error('密码长度不能大于16位'))
    } else {
      callback()
    }
  }
  // else if (!/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,16}$/.test(value)) {
  //   callback(new Error('密码必须包含数字和字母'))
  // }
}
