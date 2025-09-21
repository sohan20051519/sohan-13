from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:5173/")

    # Scroll to the Featured Projects section and take a screenshot
    projects_section = page.locator("#projects")
    projects_section.scroll_into_view_if_needed()
    page.wait_for_timeout(2000) # wait for animations
    projects_section.screenshot(path="jules-scratch/verification/projects_gsap.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
