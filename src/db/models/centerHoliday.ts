import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
  DataTypes,
  ForeignKey,
} from 'sequelize';
import sequelize from './sequelize';
import Center from './center';

class CenterHoliday extends Model<InferAttributes<CenterHoliday>, InferCreationAttributes<CenterHoliday>> {
  declare id: CreationOptional<number>;
  declare center_id: ForeignKey<Center['id']>;
  declare start_date: Date;
  declare end_date: Date;
  declare reason?: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

CenterHoliday.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    center_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'centers',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'center_holidays',
    timestamps: true,
    underscored: true,
  }
);

// Association
Center.hasMany(CenterHoliday, { foreignKey: 'center_id', as: 'holidays' });
CenterHoliday.belongsTo(Center, { foreignKey: 'center_id', as: 'center' });

export default CenterHoliday;
