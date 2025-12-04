import './style.css';

type ChampionColor = 'red' | 'green' | 'blue' | 'yellow' | 'purple';

interface Champion {
  name: string;
  image: string;
  color: ChampionColor;
}

// Champions with assigned colors (customize the 'color' property for each character)
// Available colors: 'red', 'green', 'blue', 'yellow', 'purple'
const champions: Champion[] = [
  { name: 'Andrew Odd', image: 'AndrewO.png', color: 'blue' },
  { name: 'Andrew Reason', image: 'AndrewR.png', color: 'red' },
  { name: 'Asshu', image: 'Asshu.png', color: 'green' },
  { name: 'Aya', image: 'Aya.png', color: 'green' },
  { name: 'Batsby', image: 'Batsby.png', color: 'blue' },
  { name: 'Beyontin', image: 'Beyontin.png', color: 'red' },
  { name: 'Borgne', image: 'Borgne.png', color: 'blue' },
  { name: 'Cachi Disorder', image: 'Cachi.png', color: 'purple' },
  { name: 'Cachi Reason', image: 'CachiR.png', color: 'red' },
  { name: 'Celince', image: 'Celince.png', color: 'green' },
  { name: 'Chiaki Hollow', image: 'ChiakiG.png', color: 'green' },
  { name: 'Chiaki Reason', image: 'ChiakiR.png', color: 'red' },
  { name: 'Dinah', image: 'Dinah.png', color: 'red' },
  { name: 'Diting Disorder', image: 'Diting.png', color: 'purple' },
  { name: 'Diting Reason', image: 'DitingR.png', color: 'red' },
  { name: 'Dokidoki', image: 'Doki.png', color: 'yellow' },
  { name: 'Dorothy Constant', image: 'DorothyC.png', color: 'yellow' },
  { name: 'Dorothy Reason', image: 'Dorothy.png', color: 'red' },
  { name: 'Fangus', image: 'Fangus.png', color: 'red' },
  { name: 'Freya', image: 'Freya.png', color: 'green' },
  { name: 'Fuqiu', image: 'Fuqiu.png', color: 'green' },
  { name: 'Gray', image: 'Gray.png', color: 'green' },
  { name: 'Heinrich', image: 'Heinrich.png', color: 'purple' },
  { name: 'Helkid', image: 'Helkid.png', color: 'red' },
  { name: 'Hizuki', image: 'Hizuki.png', color: 'purple' },
  { name: 'Holden', image: 'Holden.png', color: 'red' },
  { name: 'Hoyan', image: 'Hoyan.png', color: 'green' },
  { name: 'Kazuyo Hollow', image: 'KazuyoG.png', color: 'green' },
  { name: 'Kazuyo Reason', image: 'KazuyoR.png', color: 'red' },
  { name: 'Khloros', image: 'Khloros.png', color: 'red' },
  { name: 'Kloss', image: 'Kloss.png', color: 'green' },
  { name: 'Kokardi', image: 'Kokardi.png', color: 'red' },
  { name: 'Kraken', image: 'Kraken.png', color: 'blue' },
  { name: 'Lian', image: 'Lian.png', color: 'red' },
  { name: 'Liliam', image: 'Liliam.png', color: 'purple' },
  { name: 'Lilith', image: 'Lilith.png', color: 'green' },
  { name: 'Lily', image: 'Lily.png', color: 'purple' },
  { name: 'Lingluo', image: 'Lingluo.png', color: 'blue' },
  { name: 'Lowan', image: 'Lowan.png', color: 'purple' },
  { name: 'Marvell', image: 'Marvel.png', color: 'yellow' },
  { name: 'Massiah', image: 'Massiah.png', color: 'yellow' },
  { name: 'Mia', image: 'Mia.png', color: 'red' },
  { name: 'Mio', image: 'Mio.png', color: 'yellow' },
  { name: 'Mizuki', image: 'Mizuki.png', color: 'green' },
  { name: 'Nahor', image: 'Nahor.png', color: 'blue' },
  { name: 'Nell', image: 'Nell.png', color: 'purple' },
  { name: 'Nevette', image: 'Nevette.png', color: 'green' },
  { name: 'No.41', image: 'No.41.png', color: 'yellow' },
  { name: 'Ninfoniel', image: 'Ninfoniel.png', color: 'blue' },
  { name: 'Obol', image: 'Obol.png', color: 'blue' },
  { name: 'Oboro', image: 'Oboro.png', color: 'blue' },
  { name: 'Plume', image: 'Plume.png', color: 'purple' },
  { name: 'RC-77', image: 'RC77.png', color: 'blue' },
  { name: 'Rahu', image: 'Rahu.png', color: 'green' },
  { name: 'Raymerry', image: 'Raymerry.png', color: 'yellow' },
  { name: 'Rilmocha', image: 'Rilmocha.png', color: 'green' },
  { name: 'Rin Reason', image: 'RinR.png', color: 'red' },
  { name: 'Rin Odd', image: 'RinB.png', color: 'blue' },
  { name: 'Rosa', image: 'Rosa.png', color: 'blue' },
  { name: 'Sania Disorder', image: 'Ssania.png', color: 'purple' },
  { name: 'Sania Hollow', image: 'Sania.png', color: 'green' },
  { name: 'Santik', image: 'Santik.png', color: 'red' },
  { name: 'Sybil', image: 'Sybil.png', color: 'blue' },
  { name: 'Sylph', image: 'Sylph.png', color: 'blue' },
  { name: 'Tiamat', image: 'Tiamat.png', color: 'blue' },
  { name: 'Tsukiyo Mi', image: 'Tsukiyomi.png', color: 'blue' },
  { name: 'Tsutomu', image: 'Tsutomu.png', color: 'green' },
  { name: 'Turandot', image: 'Turandot.png', color: 'red' },
  { name: 'Valerian', image: 'Valerian.png', color: 'yellow' },
  { name: 'Veronika', image: 'Veronika.png', color: 'red' },
  { name: 'Vice', image: 'Vice.png', color: 'yellow' },
  { name: 'Victor', image: 'Victor.png', color: 'purple' },
  { name: 'Viper', image: 'Viper.png', color: 'blue' },
  { name: 'Xiada', image: 'Xiada.png', color: 'blue' },
  { name: 'Yang', image: 'Yang.png', color: 'blue' },
  { name: 'Yeli', image: 'Yeli.png', color: 'yellow' },
];

// Active color filter
let activeColorFilter: ChampionColor | null = null;

// Populate champion grid
function renderChampions(championsToRender: Champion[] = champions) {
  const grid = document.getElementById('championGrid');
  if (!grid) return;

  grid.innerHTML = '';

  for (const champion of championsToRender) {
    const card = document.createElement('div');
    card.className = 'champion-card';
    card.draggable = true;
    card.dataset.championName = champion.name;
    card.dataset.championImage = champion.image;
    card.innerHTML = `
      <div class="champion-image">
        <img src="${champion.image}" alt="${champion.name}" loading="lazy" />
      </div>
      <div class="champion-name">${champion.name}</div>
    `;

    // Add drag event listeners
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragend', handleDragEnd);

    // Add click-to-place functionality
    card.addEventListener('click', handleChampionClick);

    grid.appendChild(card);
  }
}

// Get filtered champions based on search and color
function getFilteredChampions(searchTerm = ''): Champion[] {
  let filtered = champions;

  // Filter by color if active
  if (activeColorFilter) {
    filtered = filtered.filter((champion) => champion.color === activeColorFilter);
  }

  // Filter by search term
  if (searchTerm) {
    filtered = filtered.filter((champion) =>
      champion.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return filtered;
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById('championSearch') as HTMLInputElement;
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const searchTerm = (e.target as HTMLInputElement).value;
    const filtered = getFilteredChampions(searchTerm);
    renderChampions(filtered);
    updatePickedChampions();
  });
}

// Color filter functionality
function setupColorFilters() {
  const colorButtons = document.querySelectorAll('.role-btn');

  for (const button of colorButtons) {
    button.addEventListener('click', () => {
      const htmlButton = button as HTMLElement;
      const color = htmlButton.dataset.color as ChampionColor;

      // Toggle filter
      if (activeColorFilter === color) {
        activeColorFilter = null;
        htmlButton.classList.remove('active');
      } else {
        // Remove active from all buttons
        for (const btn of colorButtons) {
          btn.classList.remove('active');
        }

        activeColorFilter = color;
        htmlButton.classList.add('active');
      }

      // Update display
      const searchInput = document.getElementById('championSearch') as HTMLInputElement;
      const searchTerm = searchInput?.value || '';
      const filtered = getFilteredChampions(searchTerm);
      renderChampions(filtered);
      updatePickedChampions();
    });
  }
}

// Reset button functionality
function setupReset() {
  const resetBtn = document.querySelector('.btn-reset');
  if (!resetBtn) return;

  resetBtn.addEventListener('click', () => {
    const searchInput = document.getElementById('championSearch') as HTMLInputElement;
    if (searchInput) {
      searchInput.value = '';
    }

    // Clear color filter
    activeColorFilter = null;
    const colorButtons = document.querySelectorAll('.role-btn');
    for (const btn of colorButtons) {
      btn.classList.remove('active');
    }

    // Clear all pick and ban slots
    const allSlots = document.querySelectorAll('.slot-placeholder');
    for (const slot of allSlots) {
      const img = slot.querySelector('img') as HTMLImageElement;
      if (img) {
        img.src = '/slot.png';
        img.alt = 'No animus';
        const htmlSlot = slot as HTMLElement;
        delete htmlSlot.dataset.champion;
      }
    }

    // Clear history
    banHistory = [];
    updateUndoButton();
    updateDraftSummary();

    renderChampions();
    updatePickedChampions();
  });
}

// Update picked champions visual state
function updatePickedChampions() {
  // Get all picked/banned champions
  const allSlots = document.querySelectorAll('.slot-placeholder');
  const pickedChampions = new Set<string>();

  for (const slot of allSlots) {
    const htmlSlot = slot as HTMLElement;
    if (htmlSlot.dataset.champion) {
      pickedChampions.add(htmlSlot.dataset.champion);
    }
  }

  // Update champion cards
  const championCards = document.querySelectorAll('.champion-card');
  for (const card of championCards) {
    const htmlCard = card as HTMLElement;
    const championName = htmlCard.dataset.championName;

    if (championName && pickedChampions.has(championName)) {
      htmlCard.classList.add('picked');
    } else {
      htmlCard.classList.remove('picked');
    }
  }
}

// Draft Summary
function updateDraftSummary() {
  const bluePicksSummary = document.getElementById('bluePicksSummary');
  const blueBanSummary = document.getElementById('blueBanSummary');
  const redPicksSummary = document.getElementById('redPicksSummary');
  const redBanSummary = document.getElementById('redBanSummary');

  if (!bluePicksSummary || !blueBanSummary || !redPicksSummary || !redBanSummary) return;

  // Get blue picks
  const bluePicks = document.querySelectorAll('[data-slot^="blue-"][data-type="pick"]');
  const bluePickChampions: string[] = [];
  for (const slot of bluePicks) {
    const htmlSlot = slot as HTMLElement;
    if (htmlSlot.dataset.champion) {
      bluePickChampions.push(htmlSlot.dataset.champion);
    }
  }

  // Get blue ban
  const blueBan = document.querySelector('[data-slot="blue-ban"]') as HTMLElement;
  const blueBanChampion = blueBan?.dataset.champion || '';

  // Get red picks
  const redPicks = document.querySelectorAll('[data-slot^="red-"][data-type="pick"]');
  const redPickChampions: string[] = [];
  for (const slot of redPicks) {
    const htmlSlot = slot as HTMLElement;
    if (htmlSlot.dataset.champion) {
      redPickChampions.push(htmlSlot.dataset.champion);
    }
  }

  // Get red ban
  const redBan = document.querySelector('[data-slot="red-ban"]') as HTMLElement;
  const redBanChampion = redBan?.dataset.champion || '';

  // Update blue picks summary
  bluePicksSummary.innerHTML = bluePickChampions.length > 0
    ? bluePickChampions.map((champ) => `<div class="summary-item">${champ}</div>`).join('')
    : '<div class="summary-item">None</div>';

  // Update blue ban summary
  blueBanSummary.innerHTML = blueBanChampion
    ? `<div class="summary-item">${blueBanChampion}</div>`
    : '<div class="summary-item">None</div>';

  // Update red picks summary
  redPicksSummary.innerHTML = redPickChampions.length > 0
    ? redPickChampions.map((champ) => `<div class="summary-item">${champ}</div>`).join('')
    : '<div class="summary-item">None</div>';

  // Update red ban summary
  redBanSummary.innerHTML = redBanChampion
    ? `<div class="summary-item">${redBanChampion}</div>`
    : '<div class="summary-item">None</div>';
}

// Undo functionality
function updateUndoButton() {
  const undoBtn = document.querySelector('.btn-undo') as HTMLButtonElement;
  if (undoBtn) {
    undoBtn.disabled = banHistory.length === 0;
  }
}

function setupUndo() {
  const undoBtn = document.querySelector('.btn-undo') as HTMLButtonElement;
  if (!undoBtn) return;

  undoBtn.addEventListener('click', () => {
    if (banHistory.length === 0) return;

    const lastAction = banHistory.pop();
    if (lastAction) {
      const img = lastAction.slot.querySelector('img') as HTMLImageElement;
      if (img) {
        img.src = lastAction.previousImage;
        img.alt = lastAction.previousAlt;

        if (lastAction.previousChampion) {
          lastAction.slot.dataset.champion = lastAction.previousChampion;
        } else {
          delete lastAction.slot.dataset.champion;
        }
      }
    }

    updateUndoButton();
    updateDraftSummary();
    updatePickedChampions();
  });

  updateUndoButton();
}

// Drag and drop functionality
let draggedChampion: { name: string; image: string } | null = null;

// Undo functionality
interface BanAction {
  slot: HTMLElement;
  previousImage: string;
  previousAlt: string;
  previousChampion: string | undefined;
  newChampion: string;
}

let banHistory: BanAction[] = [];

// Draft order for click-to-place functionality
const DRAFT_ORDER = [
  'blue-ban',
  'red-ban',
  'blue-1',
  'red-1',
  'red-2',
  'blue-2',
  'blue-3',
  'red-3',
  'red-4',
  'blue-4',
  'blue-5',
  'red-5',
];

// Get next available slot in draft order
function getNextAvailableSlot(): HTMLElement | null {
  for (const slotId of DRAFT_ORDER) {
    const slot = document.querySelector(`[data-slot="${slotId}"]`) as HTMLElement;
    if (slot && !slot.dataset.champion) {
      return slot;
    }
  }
  return null;
}

// Handle champion click to place in next available slot
function handleChampionClick(e: MouseEvent) {
  const card = e.currentTarget as HTMLElement;
  const championName = card.dataset.championName || '';
  const championImage = card.dataset.championImage || '';

  // Check if champion is already picked
  if (card.classList.contains('picked')) {
    return;
  }

  // Get next available slot
  const nextSlot = getNextAvailableSlot();
  if (!nextSlot) {
    // All slots are filled
    return;
  }

  // Place champion in the slot
  const img = nextSlot.querySelector('img') as HTMLImageElement;
  if (img) {
    // Save to history before making change
    banHistory.push({
      slot: nextSlot,
      previousImage: img.src,
      previousAlt: img.alt,
      previousChampion: nextSlot.dataset.champion,
      newChampion: championName,
    });

    // Update the slot
    img.src = championImage;
    img.alt = championName;
    nextSlot.dataset.champion = championName;

    updateUndoButton();
    updateDraftSummary();
    updatePickedChampions();
  }
}

function handleDragStart(e: DragEvent) {
  const card = e.currentTarget as HTMLElement;
  draggedChampion = {
    name: card.dataset.championName || '',
    image: card.dataset.championImage || '',
  };
  card.classList.add('dragging');
  if (e.dataTransfer) {
    e.dataTransfer.effectAllowed = 'copy';
  }
}

function handleDragEnd(e: DragEvent) {
  const card = e.currentTarget as HTMLElement;
  card.classList.remove('dragging');
}

function handleDragOver(e: DragEvent) {
  e.preventDefault();
  if (e.dataTransfer) {
    e.dataTransfer.dropEffect = 'copy';
  }
  const slot = e.currentTarget as HTMLElement;
  slot.classList.add('drag-over');
}

function handleDragLeave(e: DragEvent) {
  const slot = e.currentTarget as HTMLElement;
  slot.classList.remove('drag-over');
}

function handleDrop(e: DragEvent) {
  e.preventDefault();
  const slot = e.currentTarget as HTMLElement;
  slot.classList.remove('drag-over');

  if (draggedChampion) {
    const img = slot.querySelector('img') as HTMLImageElement;
    if (img) {
      // Save to history before making change
      banHistory.push({
        slot: slot,
        previousImage: img.src,
        previousAlt: img.alt,
        previousChampion: slot.dataset.champion,
        newChampion: draggedChampion.name,
      });

      // Update the slot
      img.src = draggedChampion.image;
      img.alt = draggedChampion.name;
      slot.dataset.champion = draggedChampion.name;

      updateUndoButton();
      updateDraftSummary();
      updatePickedChampions();
    }
  }
}

function handleBanSlotClick(e: DragEvent) {
  const slot = e.currentTarget as HTMLElement;
  // Clear the ban slot on click
  if (slot.dataset.champion) {
    const img = slot.querySelector('img') as HTMLImageElement;
    if (img) {
      // Save to history before clearing
      banHistory.push({
        slot: slot,
        previousImage: img.src,
        previousAlt: img.alt,
        previousChampion: slot.dataset.champion,
        newChampion: '',
      });

      img.src = '/slot.png';
      img.alt = 'No animus';
      delete slot.dataset.champion;

      updateUndoButton();
      updateDraftSummary();
      updatePickedChampions();
    }
  }
}

function setupDragAndDrop() {
  const allSlots = document.querySelectorAll('.slot-placeholder');

  for (const slot of allSlots) {
    slot.addEventListener('dragover', handleDragOver as EventListener);
    slot.addEventListener('dragleave', handleDragLeave as EventListener);
    slot.addEventListener('drop', handleDrop as EventListener);
    slot.addEventListener('click', handleBanSlotClick as EventListener);
  }
}

// Scroll champion grid when scrolling over draft area or search container
function setupDraftAreaScroll() {
  const draftArea = document.querySelector('.draft-area');
  const searchContainer = document.querySelector('.search-container');
  const championGrid = document.getElementById('championGrid');

  if (championGrid) {
    // Scroll from draft area
    if (draftArea) {
      draftArea.addEventListener('wheel', (e: Event) => {
        const wheelEvent = e as WheelEvent;
        wheelEvent.preventDefault();
        championGrid.scrollTop += wheelEvent.deltaY;
      }, { passive: false });
    }

    // Scroll from search container
    if (searchContainer) {
      searchContainer.addEventListener('wheel', (e: Event) => {
        const wheelEvent = e as WheelEvent;
        wheelEvent.preventDefault();
        championGrid.scrollTop += wheelEvent.deltaY;
      }, { passive: false });
    }
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderChampions();
  setupSearch();
  setupColorFilters();
  setupReset();
  setupUndo();
  setupDragAndDrop();
  setupDraftAreaScroll();
  updateDraftSummary();
  updatePickedChampions();
});
