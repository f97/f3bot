/* tslint:disable */
/* eslint-disable */
/**
 * Firefly III API v1.5.6
 * This is the documentation of the Firefly III API. You can find accompanying documentation on the website of Firefly III itself (see below). Please report any bugs or issues. You may use the \"Authorize\" button to try the API below. This file was last generated on 2022-04-04T03:54:41+00:00 
 *
 * The version of the OpenAPI document: 1.5.6
 * Contact: james@firefly-iii.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { RecurrenceRepetition } from './recurrence-repetition';
import { RecurrenceTransaction } from './recurrence-transaction';
import { RecurrenceTransactionType } from './recurrence-transaction-type';

/**
 * 
 * @export
 * @interface Recurrence
 */
export interface Recurrence {
    /**
     * 
     * @type {string}
     * @memberof Recurrence
     */
    created_at?: string;
    /**
     * 
     * @type {string}
     * @memberof Recurrence
     */
    updated_at?: string;
    /**
     * 
     * @type {RecurrenceTransactionType}
     * @memberof Recurrence
     */
    type?: RecurrenceTransactionType;
    /**
     * 
     * @type {string}
     * @memberof Recurrence
     */
    title?: string;
    /**
     * Not to be confused with the description of the actual transaction(s) being created.
     * @type {string}
     * @memberof Recurrence
     */
    description?: string;
    /**
     * First time the recurring transaction will fire. Must be after today.
     * @type {string}
     * @memberof Recurrence
     */
    first_date?: string;
    /**
     * Last time the recurring transaction has fired.
     * @type {string}
     * @memberof Recurrence
     */
    latest_date?: string | null;
    /**
     * Date until the recurring transaction can fire. Use either this field or repetitions.
     * @type {string}
     * @memberof Recurrence
     */
    repeat_until?: string | null;
    /**
     * Max number of created transactions. Use either this field or repeat_until.
     * @type {number}
     * @memberof Recurrence
     */
    nr_of_repetitions?: number | null;
    /**
     * Whether or not to fire the rules after the creation of a transaction.
     * @type {boolean}
     * @memberof Recurrence
     */
    apply_rules?: boolean;
    /**
     * If the recurrence is even active.
     * @type {boolean}
     * @memberof Recurrence
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Recurrence
     */
    notes?: string | null;
    /**
     * 
     * @type {Array<RecurrenceRepetition>}
     * @memberof Recurrence
     */
    repetitions?: Array<RecurrenceRepetition>;
    /**
     * 
     * @type {Array<RecurrenceTransaction>}
     * @memberof Recurrence
     */
    transactions?: Array<RecurrenceTransaction>;
}

