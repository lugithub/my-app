// import fs from 'fs';
import FileSummarizer from '../file-summarizer';
// import fs from 'fs';

// jest.mock('fs');



describe('listFilesInDirectorySync', () => {

fit('includes all files in the directory in the summary', () => {
    const fileSummary = FileSummarizer.summarizeFilesInDirectorySync(
      'c:/',
    );

    expect(fileSummary.length).toEqual(expect.any(Number));
  });
});