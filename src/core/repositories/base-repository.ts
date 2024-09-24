import { UniqueID } from '@/domain/users/enterprise/entities/value-objects/unique-id';

export interface IndexRequest {
  [k: string]: never;
} // ou Record<string, never> para represetar objeto vazío {}

export interface IndexResponse<Entity> {
  items: Partial<Entity>[];
  total: number;
}

export interface ShowRequest {
  id: string;
}

export interface ShowResponse<Entity> {
  item: Partial<Entity>;
}

export interface CreateRequest<EntityProps> {
  data: Partial<EntityProps>;
}

export interface CreateResponse {
  id: UniqueID;
}

export interface UpdateRequest<EntityProps> {
  id: string;
  data: Partial<EntityProps>;
}

export interface UpdateResponse {
  success: boolean;
}

export interface DeleteRequest {
  id: string;
}

export interface DeleteResponse {
  success: boolean;
}

export abstract class BaseRepository<Entity, EntityProps> {
  public abstract index(params: IndexRequest): Promise<IndexResponse<Entity>>;
  public abstract show(params: ShowRequest): Promise<ShowResponse<Entity>>;

  public abstract create(
    params: CreateRequest<Partial<EntityProps>>,
  ): Promise<CreateResponse>;

  public abstract update(
    params: UpdateRequest<Partial<EntityProps>>,
  ): Promise<UpdateResponse>;

  public abstract delete(params: DeleteRequest): Promise<DeleteResponse>;
}
