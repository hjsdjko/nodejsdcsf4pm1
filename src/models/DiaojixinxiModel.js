import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 调剂信息
const DiaojixinxiModel = sequelize.define('DiaojixinxiModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	diaojibianhao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '调剂编号'
	},
	wupinmingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '物品名称'
	},
	wupinleixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '物品类型'
	},
	tupian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '图片'
	},
	jiage: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '价格'
	},
	diaojididian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '调剂地点'
	},
	gengxinshijian: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('gengxinshijian')).format('YYYY-MM-DD')
        },
		defaultValue: new Date(),
		comment: '更新时间'
	},
	yonghuzhanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '用户账号'
	},
	yonghuxingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '用户姓名'
	},
	zhanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '用户账号'
	},
	xingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '用户姓名'
	},
	addtime: {
  		type: DataTypes.DATE,
  		defaultValue: DataTypes.NOW,
    	allowNull: false,
    	get() {
            return moment(this.getDataValue('addtime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '添加时间'
	}
}, {
	timestamps: false,
	freezeTableName: true,
	tableName: 'diaojixinxi'
})

export default DiaojixinxiModel
