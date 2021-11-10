import { 
    Entity,
    Column, 
    PrimaryGeneratedColumn, 
    Timestamp,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    BeforeInsert
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    idx: number;

    @CreateDateColumn({
        type: 'timestamp',
    })
    createdAt: Date;
    
    @UpdateDateColumn({
        type: 'timestamp',
    })
    updatedAt: Date;

    @Column({default:false})
    status: boolean;

    @Column({ length: 45 })
    email: string;

    @Column({type: "text"})
    password: string;

    @Column({type: "text"})
    salt: string;

    @Column({length: 15})
    firstName: string;

    @Column({length: 30})
    lastName: string;

    @Column()
    age: number;

    @Column({type: "text"})
    image: string;

    @Column({length:15})
    phoneNumber: string;

    @Column({default:false})
    authStatus: boolean;
    
    // BeforeInsert() : DB 에 insert 되기 전에 이뤄지는 로직.
    @BeforeInsert()
    async setPassword(password: string) {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(password || this.password, salt);
    }
}