import { CreationOptional, DataTypes, Model } from "sequelize";
import { sequelize } from "../../index";
import { truckingAttributes } from "./interface";

class Trucking extends Model<truckingAttributes, truckingAttributes> implements truckingAttributes { 
  declare id: CreationOptional<number>;
  declare name: string;
  declare date: Date;
  declare count: number;
  declare distance: number;
}

export const trucking = Trucking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    date: {
      type: new DataTypes.DATE,
      allowNull: false,
    },
    count: {
      type: new DataTypes.INTEGER, 
      allowNull: false,
    },
    distance: {
      type: new DataTypes.FLOAT, 
      allowNull: false,
    }
  },
  {
    tableName: "truckingList",
    sequelize,
  }
);
