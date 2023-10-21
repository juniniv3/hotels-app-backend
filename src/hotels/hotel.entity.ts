import { Location } from 'src/locations/location.entity';
import { Room } from 'src/rooms/room.entity';
import {
  Column,
  Entity,
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

  @Column()
  starts: number;

  @ManyToOne(() => Location, (location) => location.hotels)
  location: Location;

  @OneToMany(() => Room, (room) => room.hotel)
  rooms: Room[];
}