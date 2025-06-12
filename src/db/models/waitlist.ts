// models/waitlist.ts
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
  DataTypes,
} from "sequelize";
import sequelize from "./sequelize";
import User from "./user";
import ClassInstance from "./classInstance";

class Waitlist extends Model<InferAttributes<Waitlist>, InferCreationAttributes<Waitlist>> {
  declare id: CreationOptional<number>;
  declare user_id: number;
  declare class_instance_id: number;
  declare position: number; // 1-based waitlist position
  declare status: "waiting" | "promoted" | "cancelled";
}

Waitlist.init({
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
},
  user_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
  class_instance_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
  position: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
  status: {
    type: DataTypes.ENUM("waiting", "promoted", "cancelled"),
    defaultValue: "waiting"
  }
}, {
  sequelize,
  tableName: "waitlists",
  timestamps: true,
  underscored: true
});

// Associations
User.hasMany(Waitlist, { foreignKey: "user_id", as: "waitlists" });
Waitlist.belongsTo(User, { foreignKey: "user_id", as: "user" });

ClassInstance.hasMany(Waitlist, { foreignKey: "class_instance_id", as: "waitlists" });
Waitlist.belongsTo(ClassInstance, { foreignKey: "class_instance_id", as: "instance" });

export default Waitlist;
