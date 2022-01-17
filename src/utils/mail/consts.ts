import path from 'path'
import { NodemailerExpressHandlebarsOptions } from 'nodemailer-express-handlebars'
import { rootDir } from '../../../webpack/utils/env'

export const options = {
    viewEngine: {
        extName: '.hbs',
        partialsDir: path.resolve(rootDir, 'src/app/controllers/mail', 'templates'),
        defaultLayout: false
    },
    viewPath: path.resolve(rootDir, 'src/app/controllers/mail', 'templates'),
    extName: '.hbs'
} as unknown as NodemailerExpressHandlebarsOptions
