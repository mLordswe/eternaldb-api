export interface Employee {
	id: number;
	Name?: string;
	Role?: string;
	Salary?: number;
}

export interface Guild {
	guild_id: number;
	guild_name?: string;
	treasury?: bigint;
}

export interface Quest {
	mission_id: number;
	title?: string;
	details?: string;
	difficulty?: string;
	reward?: number;
	Start_Date?: Date;
	Completion_Date?: Date;
	member?: Member[]; // relation: en quest kan ha flera medlemmar
}

export interface Member {
	member_id: number;
	name?: string;
	Class?: string;
	Rank?: string;
	mission_id?: number;
	quests?: Quest; // relation: en member kan ha en quest
}
