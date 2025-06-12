// models/classInstance.ts
import {
    CreationOptional, InferAttributes, InferCreationAttributes, Model, DataTypes
} from "sequelize";
import sequelize from "./sequelize";
import GymClass from "./class";

class ClassInstance extends Model<InferAttributes<ClassInstance>, InferCreationAttributes<ClassInstance>> {
    declare id: CreationOptional<number>;
    declare class_id: number;
    declare class_instance_date: Date; 
    declare start_time: string;
    declare end_time: string;
    declare is_cancelled: boolean;
    declare cancellation_reason?: string; // Optional field for cancellation reason
    declare capacity: number;
}

ClassInstance.init({
    id: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
    },
    class_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    class_instance_date: { // Exact date this instance happens i.e the date on which this class has been created
        type: DataTypes.DATEONLY, 
        allowNull: false 
    },
    start_time: { 
        type: DataTypes.TIME, 
        allowNull: false 
    },
    end_time: { 
        type: DataTypes.TIME, 
        allowNull: false 
    },
    is_cancelled: { 
        type: DataTypes.BOOLEAN, 
        defaultValue: false 
    },
    cancellation_reason: {
        type: DataTypes.STRING,
        allowNull: true
    },
    capacity: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    }
}, {
    sequelize,
    tableName: "class_instances",
    timestamps: true,
    underscored: true
});

GymClass.hasMany(ClassInstance, { foreignKey: "class_id", as: "instances" }); 
ClassInstance.belongsTo(GymClass, { foreignKey: "class_id", as: "class" });

// The A.hasMany(B) association means that a One-To-Many relationship exists between A and B, with the foreign key being defined in the target model (B).
// The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A).


export default ClassInstance;
