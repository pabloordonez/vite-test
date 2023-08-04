export interface Page {
  id: string;
  name: string;
  url: string;
  updated_at: Date;
}

export interface IncidentUpdate {
  body: string;
  created_at: Date;
  display_at: Date;
  id: string;
  incident_id: string;
  status: string;
  updated_at: Date;
}

export interface Incident {
  created_at: Date;
  id: string;
  impact: string;
  incident_updates: IncidentUpdate[];
  monitoring_at?: string | Date;
  name: string;
  page_id: string;
  resolved_at?: string | Date;
  shortlink: string;
  status: string;
  updated_at: Date;
}

export interface Incidents {
  page: Page;
  incidents: Incident[];
}

export interface PageStatus {
  page: Page;
  status: Status;
}

export interface Status {
  description: string;
  indicator: string;
}

export interface Page {
  id: string;
  name: string;
  url: string;
  updated_at: Date;
}

export interface IncidentUpdate {
  body: string;
  created_at: Date;
  display_at: Date;
  id: string;
  incident_id: string;
  status: string;
  updated_at: Date;
}

export interface Summary {
  page: Page;
  incidents: Incident[];
}
