function getPreviewUrl(sections) {
  for (var i = 0; i < sections.length; i++) {
    for (var j = 0; j < sections[i].lessons.length; j++) {
      if (sections[i].lessons[j].isPreview === true) {
        return sections[i].lessons[j].videoUrl;
      }
    }
  }
  return '';
}

export default getPreviewUrl;
