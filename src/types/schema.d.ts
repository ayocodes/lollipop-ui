interface SchemasState {
  activeId: string;
  schemas: Schemas;
}

type Schemas = Schema[];

interface Schema {
  id: string;
  schema: string;
  schemaDetails: SchemaDetails;
  borderColor: string;
}

interface SchemasAction {
  type: any;
  payload: Schema;
}

interface SchemaDetails {
  name: string;
  description: string;
  schemaAlias: string;
  definitionAlias: string;
}

interface SchemasProvider {
  children: React.ReactNode;
  initialState: SchemasState;
}

type SchemasReducer = (state: SchemasState, action: any) => SchemasState;

/// shcema
type SchemaState = Schema;

interface SchemaAction {
  type: any;
  payload: SchemaInput;
}

interface SchemaInput {
  name: "name" | "description" | "schemaAlias" | "definitionAlias";
  value: string;
}

interface SchemaProvider {
  children: React.ReactNode;
  initialState: SchemaState;
}
