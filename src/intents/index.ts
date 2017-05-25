/**
 * Created by Dominic on 5/11/2017.
 */

import { createVol, createDataSet, createZVol } from './create';
import { deleteDataSet, deleteVol } from './delete';
import { socHi, socName, socHow} from './social';
import { editDataSetSize, editZVolSize } from './edit';

export const intends = [createVol, createZVol, createDataSet, deleteDataSet, deleteVol, socHi, socName, socHow, editDataSetSize, editZVolSize];

export const intendsObj = {
    'create:zvol': createZVol,
    'create:vol': createVol,
    'create:Dataset': createDataSet,
    'delete:zvol': deleteDataSet,
    'delete:dataset': deleteVol,
    'social:hi': socHi,
    'social:name': socName,
    'social:how' : socHow,
    'edit:DSSize': editDataSetSize,
    'edit:ZvolSize': editZVolSize
}
