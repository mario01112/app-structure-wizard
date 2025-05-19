
export interface Exercise {
  id: string;
  name: string;
  shortDescription: string;
  imageSrc: string;
  steps: string[];
  tip?: string;
}

export interface Category {
  id: string;
  name: string;
  exercises: Exercise[];
}
