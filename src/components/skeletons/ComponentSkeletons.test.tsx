import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';

import {
  BadgeSkeleton,
  DialogSkeleton,
  InputTextSkeleton,
  LinkSkeleton,
  RatingStarsSkeleton,
  ToggleSkeleton,
} from './ComponentSkeletons';

describe('ComponentSkeletons', () => {
  it('renders common skeleton components', () => {
    const html = renderToStaticMarkup(
      <div>
        <BadgeSkeleton />
        <LinkSkeleton />
        <InputTextSkeleton />
        <ToggleSkeleton />
        <RatingStarsSkeleton />
        <DialogSkeleton />
      </div>,
    );

    expect(html).toContain('aria-hidden="true"');
  });
});
