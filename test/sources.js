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

test('Video Capture Device', async t => {
  const app = t.context.app;

  const sourceType = 'Video Capture Device';
  const sourceName = `Example ${sourceType}`;

  await addSource(t, sourceType, sourceName);
  await focusMain(t);

  t.true(await sourceIsExisting(t, sourceName));

  await selectSource(t, sourceName);
  await clickRemoveSource(t);

  t.false(await sourceIsExisting(t, sourceName));
});

test('Audio Output Capture', async t => {
  const app = t.context.app;

  const sourceType = 'Audio Output Capture';
  const sourceName = `Example ${sourceType}`;

  await addSource(t, sourceType, sourceName);
  await focusMain(t);

  t.true(await sourceIsExisting(t, sourceName));

  await selectSource(t, sourceName);
  await clickRemoveSource(t);

  t.false(await sourceIsExisting(t, sourceName));
});

test('Audio Input Capture', async t => {
  const app = t.context.app;

  const sourceType = 'Audio Input Capture';
  const sourceName = `Example ${sourceType}`;

  await addSource(t, sourceType, sourceName);
  await focusMain(t);

  t.true(await sourceIsExisting(t, sourceName));

  await selectSource(t, sourceName);
  await clickRemoveSource(t);

  t.false(await sourceIsExisting(t, sourceName));
});

test('Game Capture', async t => {
  const app = t.context.app;

  const sourceType = 'Game Capture';
  const sourceName = `Example ${sourceType}`;

  await addSource(t, sourceType, sourceName);
  await focusMain(t);

  t.true(await sourceIsExisting(t, sourceName));

  await selectSource(t, sourceName);
  await clickRemoveSource(t);

  t.false(await sourceIsExisting(t, sourceName));
});

test('Window Capture', async t => {
  const app = t.context.app;

  const sourceType = 'Window Capture';
  const sourceName = `Example ${sourceType}`;

  await addSource(t, sourceType, sourceName);
  await focusMain(t);

  t.true(await sourceIsExisting(t, sourceName));

  await selectSource(t, sourceName);
  await clickRemoveSource(t);

  t.false(await sourceIsExisting(t, sourceName));
});

test('Display Capture', async t => {
  const app = t.context.app;

  const sourceType = 'Display Capture';
  const sourceName = `Example ${sourceType}`;

  await addSource(t, sourceType, sourceName);
  await focusMain(t);

  t.true(await sourceIsExisting(t, sourceName));

  await selectSource(t, sourceName);
  await clickRemoveSource(t);

  t.false(await sourceIsExisting(t, sourceName));
});

test('Image', async t => {
  const app = t.context.app;

  const sourceType = 'Image';
  const sourceName = `Example ${sourceType}`;

  await addSource(t, sourceType, sourceName);
  await focusMain(t);

  t.true(await sourceIsExisting(t, sourceName));

  await selectSource(t, sourceName);
  await clickRemoveSource(t);

  t.false(await sourceIsExisting(t, sourceName));
});

test('Image Slide Show', async t => {
  const app = t.context.app;

  const sourceType = 'Image Slide Show';
  const sourceName = `Example ${sourceType}`;

  await addSource(t, sourceType, sourceName);
  await focusMain(t);

  t.true(await sourceIsExisting(t, sourceName));

  await selectSource(t, sourceName);
  await clickRemoveSource(t);

  t.false(await sourceIsExisting(t, sourceName));
});

test('Media Source', async t => {
  const app = t.context.app;

  const sourceType = 'Media Source';
  const sourceName = `Example ${sourceType}`;

  await addSource(t, sourceType, sourceName);
  await focusMain(t);

  t.true(await sourceIsExisting(t, sourceName));

  await selectSource(t, sourceName);
  await clickRemoveSource(t);

  t.false(await sourceIsExisting(t, sourceName));
});

test('Text (GDI+)', async t => {
  const app = t.context.app;

  const sourceType = 'Text (GDI+)';
  const sourceName = `Example ${sourceType}`;

  await addSource(t, sourceType, sourceName);
  await focusMain(t);

  t.true(await sourceIsExisting(t, sourceName));

  await selectSource(t, sourceName);
  await clickRemoveSource(t);

  t.false(await sourceIsExisting(t, sourceName));
});

test('Color Source', async t => {
  const app = t.context.app;

  const sourceType = 'Color Source';
  const sourceName = `Example ${sourceType}`;

  await addSource(t, sourceType, sourceName);
  await focusMain(t);

  t.true(await sourceIsExisting(t, sourceName));

  await selectSource(t, sourceName);
  await clickRemoveSource(t);

  t.false(await sourceIsExisting(t, sourceName));
});

test('Browser Source', async t => {
  const app = t.context.app;

  const sourceType = 'Browser Source';
  const sourceName = `Example ${sourceType}`;

  await addSource(t, sourceType, sourceName);
  await focusMain(t);

  t.true(await sourceIsExisting(t, sourceName));

  await selectSource(t, sourceName);
  await clickRemoveSource(t);

  t.false(await sourceIsExisting(t, sourceName));
});

test('Adding and removing some sources', async t => {
  const app = t.context.app;

  for (const sourceType of sourceTypes) {
    const sourceName = `Example ${sourceType}`;

    await addSource(t, sourceType, sourceName);
    await focusMain(t);

    t.true(await sourceIsExisting(t, sourceName));

    await selectSource(t, sourceName);
    await clickRemoveSource(t);

    t.false(await sourceIsExisting(t, sourceName));
  }
});

test('Viewing source properties', async t => {
  const app = t.context.app;
  const sourceName = 'Cool Color Source';

  await addSource(t, 'Color Source', sourceName);

  await focusMain(t);
  await selectSource(t, sourceName);
  await clickSourceProperties(t);

  await focusChild(t);
  t.true(await app.client.isExisting('label=Color'));
});


test('Rename source', async t => {
  const app = t.context.app;
  const sourceName = 'MyColorSource1';
  const newSourceName = 'MyColorSource2';

  await addSource(t, 'Color Source', sourceName);

  await openRenameWindow(t, sourceName);
  await app.client.setValue('input', newSourceName);
  await app.client.click('button=Done');


  await focusMain(t);
  t.true(await sourceIsExisting(t, newSourceName));
});