/**
 * created by Dominic on 5/11/2017.
 */

export const deleteVol = {
    value: 'delete:zvol',
    intents: [
        'delete zvol {name}',
        'delete vol {name}',
        'delete partition {name}',
        'delete volume {name}',
        'delete zvol',
        'delete vol',
        'delete partition',
        'delete volume',
        '{pointer}, delete volume'
    ],
    intentsValues: ['name', 'pointer'],
    requiredValues: ['name']
};

export const deleteDataSet = {
    value: 'delete:dataset',
    intents: [
        'delete dataset {name}',
        'delete dataset',
        '{pointer}, delete dataset {name}'
    ],
    intentsValues: ['name', 'pointer'],
    requiredValues: ['name']
};
