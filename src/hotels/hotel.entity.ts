import { Service } from '../services/services.entity';
import { Location } from '../locations/location.entity';
import { Room } from '../rooms/room.entity';
import { Role } from 'src/role/role.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  starts: number;

  @Column()
  state: number;

  @ManyToOne(() => Location, (location) => location.hotels)
  location: Location;

  @OneToMany(() => Room, (room) => room.hotel)
  rooms: Room[];

  @ManyToMany(() => Service)
  @JoinTable()
  services: Service[];

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
}
