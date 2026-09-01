# Minh Phuc Nguyen Academic Website

This is a minimal GitHub Pages/Jekyll academic website for Minh Phuc Nguyen. The current content is based on `Minh_Phuc_Nguyen_Resume_.pdf` and focuses on GPU computing, high-performance computing, machine learning systems, and edge AI.

Before publishing, review every page for accuracy and add any missing public links, especially a Google Scholar profile if one exists.

## Publish with GitHub Pages

This site is configured to publish from the public `kaitophuc/kaitophuc.github.io` repository at:

```text
https://kaitophuc.github.io/
```

In the public GitHub repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and `/(root)` folder, then click **Save**. New pushes to `main` will update the website automatically.

## Local Preview

This repository is configured to install Ruby gems locally in `vendor/bundle`, not in the system Ruby directory.

On Ubuntu, install the Ruby development headers first if native gems fail with `mkmf.rb can't find header files for ruby`:

```bash
sudo apt-get install ruby3.2-dev
```

If `bundle -v` works, run:

```bash
bundle install
bundle exec jekyll serve
```

Then open:

```text
http://127.0.0.1:4000
```

If `bundle` is not installed, avoid installing it into the system gem directory unless you intentionally want a global install. Use a user-local install instead:

```bash
gem install --user-install bundler
```

After that, make sure your Ruby user gem bin directory is on your `PATH`, then run the preview commands above.

## Pages

- Home: `index.md`
- Research: `_pages/research.md`
- Projects: `_pages/projects.md`
- Coursework: `_pages/coursework.md`
- Work: `_pages/work.md`
- CV: `_pages/cv.md`
- Contact: `_pages/contact.md`

Navigation is configured in `_data/navigation.yml`.
