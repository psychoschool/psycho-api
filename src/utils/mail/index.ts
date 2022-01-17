import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
import type { SendMailOptions } from 'nodemailer'
import { getEnvVars } from 'src/utils'
import { options } from './consts'
import { Props } from './props'

export const sendEmail = async ({ to, subject, template, context }: Props) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
            user: getEnvVars('EMAIL_USER'),
            pass: getEnvVars('EMAIL_PASSWORD')
        }
    })

    transporter.use('compile', hbs(options))

    return await transporter.sendMail({
        from: '"PsychoSchool 👻" <courses@psychoschool.ru>',
        to,
        subject,
        template,
        context
    } as SendMailOptions)
}
