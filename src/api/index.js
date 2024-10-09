import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import YonghuController from './Yonghu'
import WupinleixingController from './Wupinleixing'
import XianzhidiaojiController from './Xianzhidiaoji'
import DiaojiyuyueController from './Diaojiyuyue'
import DiaojixinxiController from './Diaojixinxi'
import DiaojidingdanController from './Diaojidingdan'
import DiaojipingjiaController from './Diaojipingjia'
import ForumController from './Forum'
import NewstypeController from './Newstype'
import NewsController from './News'
import StoreupController from './Storeup'
import AboutusController from './Aboutus'
import SystemintroController from './Systemintro'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/yonghu', YonghuController({ config, db }))

	api.use('/wupinleixing', WupinleixingController({ config, db }))

	api.use('/xianzhidiaoji', XianzhidiaojiController({ config, db }))

	api.use('/diaojiyuyue', DiaojiyuyueController({ config, db }))

	api.use('/diaojixinxi', DiaojixinxiController({ config, db }))

	api.use('/diaojidingdan', DiaojidingdanController({ config, db }))

	api.use('/diaojipingjia', DiaojipingjiaController({ config, db }))

	api.use('/forum', ForumController({ config, db }))

	api.use('/newstype', NewstypeController({ config, db }))

	api.use('/news', NewsController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/aboutus', AboutusController({ config, db }))

	api.use('/systemintro', SystemintroController({ config, db }))

	return api
}
