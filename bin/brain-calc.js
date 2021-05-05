#!/usr/bin/env node
import readlineSync from 'readline-sync';
import calcul from '../src/index.js';
import createExpression from '../src/createExpression.js';
import gameGoal from '../src/gameGoal.js';

export { calcul, createExpression };

calcul();
