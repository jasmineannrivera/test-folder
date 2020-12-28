"use strict";
import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch('LPKZEQYGS8', '4f7d1f8ba212fba27ee2acaf048aa63b');
const index = client.initIndex('test');