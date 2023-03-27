/**
 * In this challenge, you have to get all the categories from the events. The categories 
 * must be unique and sorted from A to Z.
 * 
 * 
 * 
 * 
 * @param events List of events with their categories
 * @returns All existing categories sorted alphabatically without duplicates (A to Z)
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ events }: { events: EventWithCategory[] }): string[] {


    let category: Array<Array<string>> = [];

    category = events.map(({categories}) => ({categories}).categories)


    let i = 0;
    let j = 0;
    let elementsCategory: Array<string>  = [];

    for (i = 0; i < category.length; i++) {
        // console.log(category[i])
        if (category[i].length > 0 ) {
            for(j = 0; j < category[i].length; j++ ){
                elementsCategory.push(category[i][j])
            }

        }
    }


    let filteredElementsCategory: Array<string> = [];
    filteredElementsCategory = elementsCategory.filter(function(item, pos) {
        return elementsCategory.indexOf(item) == pos;
    })


    let sortedCategory: Array<string> = filteredElementsCategory.sort((a, b) => a.localeCompare(b));
      

    return sortedCategory;
}








// used interfaces, do not touch
export interface EventWithCategory {
    startDatetime: string;
    endDatetime: string;
    event: string;
    categories: string[];
}
