// models/booking.ts
import {
  CreationOptional, InferAttributes, InferCreationAttributes, Model, DataTypes
} from "sequelize";
import sequelize from "./sequelize";
import User from "./user";
import ClassInstance from "./classInstance";

class Booking extends Model<InferAttributes<Booking>, InferCreationAttributes<Booking>> {
  declare id: CreationOptional<number>;
  declare user_id: number;
  declare class_instance_id: number;
  declare status: "confirmed" | "cancelled" | "pending";
  declare waitlist_position?: number;
}

Booking.init({
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
  status: { 
    type: DataTypes.ENUM("confirmed", "cancelled", "pending"), 
    allowNull: false,
    defaultValue: "pending" 
}
}, {
  sequelize,
  tableName: "bookings",
  timestamps: true,
  underscored: true
});

User.hasMany(Booking, { foreignKey: "user_id", as: "bookings" });
Booking.belongsTo(User, { foreignKey: "user_id", as: "user" });

ClassInstance.hasMany(Booking, { foreignKey: "class_instance_id", as: "bookings" });
Booking.belongsTo(ClassInstance, { foreignKey: "class_instance_id", as: "instance" });

//The A.hasMany(B) association means that a One-To-Many relationship exists between A and B, with the foreign key being defined in the target model (B).
//The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A).
export default Booking;
