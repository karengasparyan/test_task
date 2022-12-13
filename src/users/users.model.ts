import {Table, Column, Model, DataType, HasOne} from 'sequelize-typescript';
import {accounts} from "../accounts/accounts.model";

@Table
export class users extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true
  })
  id: string;

  @Column({
  type: DataType.STRING(255),
  allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: "",
  })
  monthly_salary: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: '[]',
  })
  monthly_expenses: number;

  @HasOne(() => accounts)
  account: accounts;
}
