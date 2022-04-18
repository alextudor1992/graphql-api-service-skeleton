import { Column } from 'typeorm'

export abstract class CRUDTimestamps {
  @Column()
  dateCreated: Date

  @Column({ nullable: true })
  dateUpdated?: Date

  @Column({ nullable: true })
  dateDeleted?: Date
}
