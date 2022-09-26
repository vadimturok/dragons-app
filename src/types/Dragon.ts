export interface Dragon{
    id: string;
    description: string;
    wikipedia: string;
    name: string;
    flickr_images: string[];
    first_flight: string;
    dry_mass_kg: number;
    diameter: {
        meters: number;
        feet: number;
    }
}