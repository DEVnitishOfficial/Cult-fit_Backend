// models/class.ts
import {
    CreationOptional, InferAttributes, InferCreationAttributes, Model, DataTypes
} from "sequelize";
import sequelize from "./sequelize";
import Center from "./center";

class GymClass extends Model<InferAttributes<GymClass>, InferCreationAttributes<GymClass>> {
    declare id: CreationOptional<number>;
    declare center_id: number;
    declare title: string;
    declare description: string;
    declare is_recurring: boolean; // true: recurring, false: single
    declare days_of_week?: string[]; // ['MON', 'WED']
    declare start_Date?: Date; // 
    declare end_Date?: Date;
    declare scheduled_date?: Date; // for single classes
    declare start_Time: string; // '17:00'  here start and end time is a ideal condition in which the class should start and end it may vary based on the actual class_instance
    declare end_Time: string;   // '17:50'
}

GymClass.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    center_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    is_recurring: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    days_of_week: {
        type: DataTypes.ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'), defaultValue: null,
        allowNull: true,
    },
    start_Date: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    end_Date: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    scheduled_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    start_Time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    end_Time: {
        type: DataTypes.TIME,
        allowNull: false
    },

}, {
    sequelize,
    tableName: "classes",
    timestamps: true,
    underscored: true
});

// Relations
GymClass.belongsTo(Center, { foreignKey: "center_id", as: "center" });
Center.hasMany(GymClass, { foreignKey: "center_id", as: "classes" });

export default GymClass;
