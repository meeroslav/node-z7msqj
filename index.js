import { intro, outro, confirm, select, spinner } from '@clack/prompts';
import { setTimeout } from 'timers/promises';

intro('coffee brew');

const s = spinner();
s.start('Collecting dependencies using greedy coloring');
await setTimeout(2000);
s.stop('Dependencies set');

s.start('Calculating prime number based on timestamp');
await setTimeout(10000);
s.stop('Prime number found: 433,463,873');

s.start('Asking ChatGPT for 433,463,873th word in War and Peace');
await setTimeout(10000);
s.stop('Word found: bundling');

s.start('Hashing the files');
await setTimeout(100);
s.stop('Files hashed');

s.start('Generating unique image using Midjourney');
await setTimeout(10000);
s.stop('Image generated');

s.start('Brewing bundle');

outro('Brewing done!');
