export const validName = new RegExp(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/);
export const validUserName = new RegExp(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/);
export const validCorreo = new RegExp(/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/);
export const validPassword = new RegExp(/^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/);