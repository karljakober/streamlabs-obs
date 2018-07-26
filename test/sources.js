import test from 'ava';
import { useSpectron, focusMain, focusChild } from './helpers/spectron/index';
import {
  addSource,
  clickRemoveSource,
  clickSourceProperties,
  selectSource,
  openRenameWindow,
  sourceIsExisting
} from './helpers/spectron/sources';

useSpectron();

const sourceTypes = [
  'Video Capture Device',
  'Audio Output Capture',
  'Audio Input Capture',
  'Game Capture',
  'Window Capture',
  'Display Capture',
  'Image',
  'Image Slide Show',
  'Media Source',
  'Text (GDI+)',
  'Color Source',
  'Browser Source'
];


test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});
test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(true);

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});