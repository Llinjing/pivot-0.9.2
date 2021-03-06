import { List } from 'immutable';
import { Instance } from 'immutable-class';
import { Expression, SortAction } from 'plywood';
import { Dimension } from '../dimension/dimension';
import { Filter } from '../filter/filter';
import { SplitCombine, SplitCombineJS, SplitCombineContext } from '../split-combine/split-combine';
export declare type SplitsValue = List<SplitCombine>;
export declare type SplitsJS = SplitCombineJS | SplitCombineJS[];
export declare type SplitContext = SplitCombineContext;
export declare class Splits implements Instance<SplitsValue, SplitsJS> {
    static EMPTY: Splits;
    static isSplits(candidate: any): candidate is Splits;
    static fromSplitCombine(splitCombine: SplitCombine): Splits;
    static fromJS(parameters: SplitsJS, context?: SplitContext): Splits;
    splitCombines: List<SplitCombine>;
    constructor(parameters: SplitsValue);
    valueOf(): SplitsValue;
    toJS(): SplitsJS;
    toJSON(): SplitsJS;
    toString(): string;
    equals(other: Splits): boolean;
    replaceByIndex(index: number, replace: SplitCombine): Splits;
    insertByIndex(index: number, insert: SplitCombine): Splits;
    addSplit(split: SplitCombine): Splits;
    removeSplit(split: SplitCombine): Splits;
    changeSortAction(sort: SortAction): Splits;
    getTitle(dimensions: List<Dimension>): string;
    length(): number;
    forEach(sideEffect: (value?: SplitCombine, key?: number, iter?: List<SplitCombine>) => any, context?: any): number;
    get(index: number): SplitCombine;
    first(): SplitCombine;
    last(): SplitCombine;
    findSplitForDimension(dimension: Dimension): SplitCombine;
    hasSplitOn(dimension: Dimension): boolean;
    replace(search: SplitCombine, replace: SplitCombine): Splits;
    map(mapper: (value?: SplitCombine, key?: number) => SplitCombine, context?: any): Splits;
    toArray(): SplitCombine[];
    removeBucketingFrom(expressions: Expression[]): Splits;
    updateWithFilter(filter: Filter, dimensions: List<Dimension>): Splits;
    constrainToDimensions(dimensions: List<Dimension>): Splits;
    timezoneDependant(): boolean;
    changeSortIfOnMeasure(fromMeasure: string, toMeasure: string): Splits;
}
