import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 调剂评价
const DiaojipingjiaModel = sequelize.define('DiaojipingjiaModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	pingjiabianhao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '评价编号'
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
	pingjialeixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '评价类型'
	},
	pingyu: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '评语'
	},
	pingjiashijian: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('pingjiashijian')).format('YYYY-MM-DD')
        },
		defaultValue: new Date(),
		comment: '评价时间'
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
	shhf: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '回复内容'
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
	tableName: 'diaojipingjia'
})

export default DiaojipingjiaModel
